import React from 'react';
import { createDevTools } from 'redux-devtools';
import DockMonitor from 'redux-devtools-dock-monitor';
import LogMonitor from 'redux-devtools-log-monitor';

const DevTools = createDevTools(
  <DockMonitor
    toggleVisibilityKey="ctrl-h"
    changePositionKey="ctrl-q"
    defaultPosition="left"
    defaultIsVisible={false}
  >
    <LogMonitor />
  </DockMonitor>
);

export default DevTools;
