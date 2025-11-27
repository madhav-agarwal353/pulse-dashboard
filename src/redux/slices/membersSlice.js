import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  members: [
    {
      id: "u1",
      name: "Dylan Hunter",
      avatar: "",
      status: "Working",
      tasks: [
        { id: "t1", title: "Prepare weekly report", due: "2025-12-01", progress: 40, completed: false },
      ],
    },
    { id: "u2", name: "Natalie Gibson", avatar: "", status: "Meeting", tasks: [] },
    { id: "u3", name: "Peter Piper", avatar: "", status: "Break", tasks: [] },
    { id: "u4", name: "Alex Johnson", avatar: "", status: "Offline", tasks: [] },
  ],
};

const membersSlice = createSlice({
  name: "members",
  initialState,
  reducers: {
    setStatus(state, action) {
      const { memberId, status } = action.payload;
      const m = state.members.find((x) => x.id === memberId);
      if (m) m.status = status;
    },

    assignTask: {
      reducer(state, action) {
        const { memberId, task } = action.payload;
        const m = state.members.find((x) => x.id === memberId);
        if (m) m.tasks.push(task);
      },
      prepare(memberId, title, due) {
        return {
          payload: {
            memberId,
            task: { id: nanoid(), title, due, progress: 0, completed: false },
          },
        };
      },
    },

    updateProgress(state, action) {
      const { memberId, taskId, delta } = action.payload;
      const m = state.members.find((x) => x.id === memberId);
      if (!m) return;
      const t = m.tasks.find((y) => y.id === taskId);
      if (!t) return;
      t.progress = Math.max(0, Math.min(100, t.progress + delta));
      t.completed = t.progress === 100;
    },
  },
});

export const { setStatus, assignTask, updateProgress } = membersSlice.actions;
export default membersSlice.reducer;
