import { Component,OnInit } from '@angular/core';
import { HttpcallService } from '../Services/httpcall.service';
import { JobsProfile } from '../Interfaces/JobsClass';
import { catchError, throwError } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
  providers: [MessageService]
})
export class DataTableComponent implements OnInit {
  table!: JobsProfile ;
  cols:any;
  exportColumns:any
  saveAsExcelFile: any;
temparray!:any
Loader:boolean=true

constructor(private Httpservice:HttpcallService,private messageService: MessageService){
  var data=this.Httpservice.getJobs();
  console.log(data)
}

   ngOnInit() {
    this.temparray = [ 
      { 
          Company: 'Varun', 
          Title: 'Pratap', 
          summary: 'jk',
          URL:"kjh"
      }, 
      { 
        Company: 'Varun', 
        Title: 'Pratap', 
        summary: 'jk',
        URL:"kjh"
      }, 
      { 
        Company: 'Varun', 
        Title: 'Pratap', 
        summary: 'jk',
        URL:"kjh"
      } ,
  ]; 
    this.Httpservice.getJobs()
    .pipe(
      catchError((error) => {
        
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error Occured Please try again' });
        console.log(error);
        return throwError("Eror Occured");
      })
    )
    
    .subscribe(res=>{
      this.table=res;
      this.Loader=false;
         });
    
  }
  getData(){
    console.log(this.table);
  }


//   exportPdf() {
//     import('jspdf').then((jsPDF) => {
//         import('jspdf-autotable').then((x) => {
//             const doc = new jsPDF.default('p', 'px', 'a4');
//             (doc as any).autoTable(this.exportColumns, this.table);
//             doc.save('products.pdf');
//         });
//     });
// }

exportCSV() {
    import('xlsx').then((XLSX) => {
      const ws = XLSX.utils.json_to_sheet(this.table);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Data");
  XLSX.writeFile(wb, "JobsData.xlsx");
 
        // const worksheet = xlsx.utils.json_to_sheet(this.table);
        // const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
        // const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        // this.saveAsExcelFile(excelBuffer, 'JobsData');
    });
}


}
