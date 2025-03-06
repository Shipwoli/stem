import React from 'react';
import { useParams } from 'react-router-dom';
import { CodeEditor } from '../components/code-editor';
import { ArduinoSimulator } from '../components/arduino-simulator';
import { BlocklyEditor } from '../components/blockly-editor';
import { ModelingEditor } from '../components/modeling-editor';
import { CircuitSimulator } from '../components/circuit-simulator';

const LAB_COMPONENTS: Record<string, React.ComponentType<any>> = {
  'coding': CodeEditor,
  'electronics': ArduinoSimulator,
  'robotics': BlocklyEditor,
  '3d': ModelingEditor,
  'circuits': CircuitSimulator,
};

const LAB_CONFIGS = {
  coding: {
    title: 'Code Lab',
    description: 'Write, test, and collaborate on code in real-time',
    initialValue: `// Welcome to the Code Lab!
// Try running this example:

function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet('World'));
`,
  },
  electronics: {
    title: 'Electronics Lab',
    description: 'Simulate and test Arduino-based electronic projects',
  },
  robotics: {
    title: 'Robotics Lab',
    description: 'Program robots using visual block-based programming',
  },
  '3d': {
    title: '3D Modeling Lab',
    description: 'Create and manipulate 3D models',
  },
  circuits: {
    title: 'Circuit Lab',
    description: 'Design and simulate electronic circuits',
  },
};

export function LabWorkspace() {
  const { labType, projectId } = useParams();
  const Component = LAB_COMPONENTS[labType || 'coding'];
  const config = LAB_CONFIGS[labType as keyof typeof LAB_CONFIGS];

  if (!Component || !config) {
    return (
      <div className="p-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Lab type not found
        </h2>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{config.title}</h1>
        <p className="mt-2 text-gray-600">{config.description}</p>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <Component 
            projectId={projectId} 
            collaborative={true}
            initialValue={config.initialValue}
          />
        </div>
      </div>
    </div>
  );
}