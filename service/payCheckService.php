<?php

class payCheckService{
    
    
            public static  function calculateINSS($salary){
                
                if($salary <= 1399.12)                
                return ($salary*0.08);
                else if($salary >= 1399.12 and $salary <= 2331.88)
                    return ($salary*0.09);
                else if($salary >= 2331.89 and $salary <= 4663.75)
                return ($salary*0.11);
                    else
                    return (513.02);
            }
    
    
            public static function calculateIRPF($salary){
                
                if($salary <= 1903.98)                
                return (0.00);
                else if($salary >= 1903.99 and $salary <= 2826.65)
                    return (($salary*0.075)-142.80);
                else if($salary >= 2826.66 and $salary <= 3751.05)
                    return (($salary*0.15)-354.80);
                else if($salary >= 3751.06 and $salary <= 4664.68)
                    return (($salary*0.225)-636.13);
               else if($salary >= 4664.69)
                    return (($salary*0.275)-869.36);
            
            }
            
            public static function calculateSalaryLiquid($salary){
               
                $SalINSS = payCheckService::calculateINSS($salary);
                $SalIRPF = payCheckService::calculateIRPF($salary - $SalINSS);
                    return  $salary - $SalINSS - $SalIRPF;   
                
            }
}



?>