import React from 'react';
import { Puck } from "@measured/puck";
import "@measured/puck/puck.css";
import config from './puck.config';

export interface PuckEditorProps {
  data?: any;
  onPublish?: (data: any) => void | Promise<void>;
}

export const PuckEditor = ({
  data,
  onPublish
}: PuckEditorProps) => {
  return (
    <Puck
      config={config as any}
      data={data}
      onPublish={onPublish}
    />
  );
};

export default PuckEditor;