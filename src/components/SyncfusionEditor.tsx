import { SampleBase } from './SampleBase';
import { DocumentEditorContainerComponent, Toolbar, SfdtExport,WordExport} from '@syncfusion/ej2-react-documenteditor';



DocumentEditorContainerComponent.Inject(Toolbar, SfdtExport,WordExport);

export default class SyncfusionEditor extends SampleBase {

  public container: DocumentEditorContainerComponent =  new DocumentEditorContainerComponent({});

  public async rendereComplete(): Promise<void> {
  

  }

  render() {
  
    return (
      <div>
         
        <DocumentEditorContainerComponent
          ref={scope => {
            this.container = scope;
          }}
          id="container"
          height={'1250px'}
          // serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"
          
        />
      </div>
    );
  }

}
