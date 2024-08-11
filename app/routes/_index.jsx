import WorkflowDesigner from '@optimajet/workflow-designer-react';

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const schemeCode = '<YOUR_SCHEME_CODE_VALUE>';
  const processId = undefined;
  const designerConfig = {
    renderTo: 'wfdesigner',
    apiurl: '<YOUR_API_URL_VALUE>',
    templatefolder: '/templates/',
    widthDiff: 0,
    heightDiff: 0
  };


  return (
    <div className="font-sans p-4">
      <WorkflowDesigner
          schemeCode={schemeCode}
          processId={processId}
          designerConfig={designerConfig}
      />
    </div>
  );
}
