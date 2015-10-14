<?php
    require('payCheckService.php');

    $type = $_POST['type'];
    $salary = $_POST['salary'];

    if($type=='INSS'){
            $results = payCheckService::calculateINSS($salary);
            echo $results;                        
    }
    else if($type=='IRPF'){
            $subSalary = payCheckService::calculateINSS($salary);
            $IRPF = payCheckService::calculateIRPF($salary-$subSalary);    
            echo $IRPF;
    }

    else if($type=='SalLiquid'){
            $salaryLiquid =   payCheckService::calculateSalaryLiquid($salary);
            echo $salaryLiquid;                            
    }
    

?>