import {Component} from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
 selector: 'add-emp',
 templateUrl: 'app.add.html'   
})
export class AddEmployeeComponent{
    empId:number;
    empName:string;
    empSalary:number;
    empDep:string;

    empAll:any[]=[
        {empId:1001,empName:"ABCD",empSalary:3333.11,empDep:"Java"},
        {empId:1002,empName:"BCD",empSalary:2333.11,empDep:"OraApps"},
        {empId:1003,empName:"CD",empSalary:77333.11,empDep:"BI"},
    ];
    addEmployee():any{
        this.empAll.push({empId:this.empId,empName:this.empName,empSalary:this.empSalary,empDep:this.empDep})
        alert("Employee Added....");
        this.empId=null;
        this.empName=null;
        this.empSalary=null;
        this.empDep=null;
    }

    deleteEmployee(data:number):any{
        this.empAll.splice(data,1);
        alert("Employee Deleted....");   
    }

    emId:number;
    emName:string;
    emSalary:number;
    emDep:string;
    emindex:number;

    updateEmployee(data:number):any{
        this.emindex=data;
        this.emId=this.empAll[data].empId;
        this.emName=this.empAll[data].empName;
        this.emSalary=this.empAll[data].empSalary;
        this.emDep=this.empAll[data].empDep;
        
        
    }

    updatevalue():any{
        this.empAll.splice(this.emindex,1);
        this.empAll.push({empId:this.emId,empName:this.emName,empSalary:this.emSalary,empDep:this.emDep})
        this.emId=null;
        this.emName=null;
        this.emSalary=null;
        this.emDep=null;
    }
    
}