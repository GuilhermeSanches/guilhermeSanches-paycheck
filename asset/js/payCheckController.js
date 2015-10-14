var payCheckController = {

    init:function(){
        document.formPayCheck.addEventListener('submit', function(event){
                payCheckController.setForm();            
        event.preventDefault();
        });
    
    },
    
    setForm:function(){
        
        var callback = function(value, flag){
               
                    payCheckController.showResult(value, flag);                                                   
        }
        
        var salary = parseFloat(document.formPayCheck.salary.value);
              
        payCheckService.calcINSS(salary, callback);
        payCheckService.calcIRPF(salary, callback);
        payCheckService.calcSalLiq(salary, callback);
    },
    
    showResult:function(value, flag){
        
             if(flag=='INSS'){
                 
                 var labelINSS  = document.getElementById('inpINSS');
                        labelINSS.setAttribute('value', value.toFixed(2)); 
                                         
                }
                else if(flag=='IRPF'){
                        var labelIRPF  = document.getElementById('inpIRPF');
                        labelIRPF.setAttribute('value', value.toFixed(2));
                }  
                else if(flag=='SalLiquid'){
                        var labelSalLiquid  = document.getElementById('inpSalLiquid');
                        labelSalLiquid.setAttribute('value', value.toFixed(2));
                
                }
}

};

window.onload = payCheckController.init;