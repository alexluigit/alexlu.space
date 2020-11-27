#!/bin/sh
if tmux has-session -t=Blog 2>/dev/null; then
  tmux a -t Blog; exit
fi
tmux new -s Blog -d
tmux rename-window -t Blog:1 editor
tmux send-keys -t Blog:1 nvim Enter
tmux new-window -t Blog:2 -n server
tmux send-keys -t Blog:2 npm\ run\ dev Enter
tmux new-window -t Blog:3 -n content
tmux send-keys -t Blog:3 vifmrun\ ./content Enter
tmux new-window -t Blog:4 -n git
tmux send-keys -t Blog:4 g Enter
tmux select-window -t Blog:1
tmux a -t Blog; exit
