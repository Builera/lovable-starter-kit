# ADR-003: Use Supabase Realtime for Collaboration

**Date:** 2026-01-03  
**Status:** Accepted  
**Deciders:** Marcus (Tech Lead), Sarah (Product Owner)

---

## Context

TaskFlow Pro needs real-time collaboration features for the board view. When multiple team members view the same board, they should see:
1. Live updates when tasks are moved or edited
2. Presence indicators showing who else is viewing
3. Eventually: conflict warnings when editing the same card

We're already using Supabase for database and auth. We need to decide how to implement real-time functionality.

**Constraints:**
- Small team (2 devs), limited time for complex implementations
- Need to ship in 2 weeks
- Must work reliably with 10+ concurrent users
- Budget-conscious (startup phase)

---

## Decision

We will use **Supabase Realtime** for all real-time collaboration features, including:
- Database change subscriptions for live task updates
- Presence channels for showing active users
- Broadcast channels for ephemeral events (typing indicators, cursor positions - future)

---

## Alternatives Considered

### Option 1: Custom WebSocket Server

**Pros:**
- Full control over implementation
- Can optimize for specific use cases
- No vendor lock-in

**Cons:**
- Significant development time (3-4 weeks minimum)
- Need to handle scaling, reconnection, auth ourselves
- Additional infrastructure to maintain
- Higher ongoing costs (separate server)

### Option 2: Pusher

**Pros:**
- Mature, reliable service
- Good documentation
- Presence channels built-in

**Cons:**
- Additional vendor (already using Supabase)
- Pricing scales with connections (~$50/mo at 1000 users)
- Need to sync auth between Supabase and Pusher
- Slight latency penalty (extra hop)

### Option 3: Supabase Realtime (Selected)

**Pros:**
- Already integrated with our stack
- Uses same auth (no sync needed)
- Presence and broadcast included
- Free tier generous (200 concurrent connections)
- Database subscriptions are automatic
- Reduces infrastructure complexity

**Cons:**
- Less mature than Pusher
- Fewer features than custom solution
- Tied to Supabase platform

**Why selected:** 
Supabase Realtime reduces complexity by keeping everything in one platform. The auth integration alone saves significant development time. The free tier covers our needs for MVP and early growth. If we hit scale limits, we can revisit, but that's a good problem to have.

---

## Consequences

### Positive

- Single platform for all backend needs (DB, Auth, Realtime)
- Faster implementation (1 week vs 3-4 weeks)
- Automatic database change notifications
- No additional infrastructure to manage
- Cost-effective at our scale

### Negative

- Limited to Supabase's feature set
  - **Mitigation:** Features cover our needs; can add Pusher later if needed
- If Supabase has outage, realtime is affected
  - **Mitigation:** Graceful degradation to polling fallback
- Presence has ~100ms sync delay
  - **Mitigation:** Debounce UI updates, acceptable for our use case

### Neutral

- Team needs to learn Supabase Realtime API (low learning curve)
- Debugging requires Supabase dashboard (good tooling available)

---

## Implementation Notes

- [x] Enable Realtime in Supabase dashboard for `tasks` table
- [x] Create `useRealtimeSubscription` hook for database changes
- [x] Create `usePresence` hook for user presence
- [x] Add reconnection logic with exponential backoff
- [ ] Add polling fallback for degraded mode
- [ ] Load test with 15 concurrent users

### Code Example

```tsx
// src/hooks/use-realtime-tasks.ts
export const useRealtimeTasks = (boardId: string) => {
  const queryClient = useQueryClient();
  
  useEffect(() => {
    const channel = supabase
      .channel(`board:${boardId}`)
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'tasks', filter: `board_id=eq.${boardId}` },
        (payload) => {
          queryClient.invalidateQueries({ queryKey: ['tasks', boardId] });
        }
      )
      .subscribe();
    
    return () => { supabase.removeChannel(channel); };
  }, [boardId, queryClient]);
};
```

---

## Related

- **Related ADRs:** ADR-002 (State Management), ADR-004 (Optimistic Updates)
- **Related Issues:** #892 (Presence Indicators), #901 (Live Updates)
- **Related Docs:** [Supabase Realtime Docs](https://supabase.com/docs/guides/realtime)

---

## Changelog

| Date | Change | Author |
|------|--------|--------|
| 2026-01-03 | Initial draft | Marcus |
| 2026-01-04 | Accepted after team review | Marcus, Sarah |
| 2026-01-08 | Added implementation notes after completion | Marcus |
