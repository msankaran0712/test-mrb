import { TreeView, TreeViewItem } from "@trimbleinc/modus-react-bootstrap";

function ModusReactBootstrapPage() {
  return (
    <TreeView id="test" nodeId={1} checkBoxSelection multiSelectCheckBox>
      <TreeViewItem nodeId={2} label="test">
        <TreeViewItem nodeId={3} label="test">
          <TreeViewItem nodeId={4} label="test"></TreeViewItem>
        </TreeViewItem>
      </TreeViewItem>
    </TreeView>
  );
}

export default ModusReactBootstrapPage;
