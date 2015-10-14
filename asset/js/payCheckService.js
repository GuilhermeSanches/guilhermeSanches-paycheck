var payCheckService = {

    calcINSS:function(salary, callback){
        $.ajax({
                    url:"service/payCheckController.php", 
                    type:"POST",			
                    data:'salary'+'='+salary+'&'+'type'+'='+'INSS',
                    success: function (value){
                            callback(parseFloat(value), 'INSS');                        
                    }
                
                });                
    },
    
    calcIRPF:function(salary, callback){
           $.ajax({
                    url:"service/payCheckController.php", 
                    type:"POST",
                    data: 'salary'+'='+salary+'&'+'type'+'='+'IRPF',
                    success: function (value){
                            callback(parseFloat(value), 'IRPF');                        
                    }
                
                });        
    },
    
    calcSalLiq:function(salary, callback){
             $.ajax({
                    url:"service/payCheckController.php", 
                    type:"POST",
                    data: 'salary'+'='+salary+'&'+'type'+'='+'SalLiquid',
                    success: function (value){
                            callback(parseFloat(value), 'SalLiquid');                        
                    }
                
                });      
    
    
    }
};