$(document).ready(function(){
   

   alert('Data is synced with latest one')
   $.ajax({
      url: "https://api.mlab.com/api/1/databases/productstutorial/collections/deck?apiKey=MXi2J3ryTDKRQF_lqkAoNYJSOI7n6-tw",
      
      type: 'GET',
      crossDomain: true,
      xhrFields: {
          withCredentials: true
      },
      
       
      success: function(data){
         console.log(data);
          

         $('#tx1').val(data[0][1]);
          $('#tx2').val(data[0][2]);
          $('#tx3').val(data[0][3]);
          $('#tx4').val(data[0][4]);
          $('#tx5').val(data[0][5]);


          //tb1
          $('#tb1 td').each(function(index){
             $(this).text(data[0][6][index]);
          
        })


        //tb2   
    $('#itb1 td').each(function(index){
          $(this).text(data[0][7][index]);
      
    })

   

       //tb3     
    $('#itb2 td').each(function(index){
         $(this).text(data[0][8][index]);
      
    })

    

   
     //tb4    
    $('#tb3 td').each(function(index){
         $(this).text(data[0][9][index]);
      
    })


    //tb5
    $('#tb4 td').each(function(index){
          $(this).text(data[0][10][index]);
     })
      
 
      
     var y = document.querySelectorAll("#stbot1");
     var j;
     for (j = 0; j < y.length; j++) {
        console.log(data[0][11][j])
        y[j].style.backgroundColor=data[0][11][j];
     }
     //console.log(boxColors)
               
           
 
          
   }
   })
  



   /******************************************************* */
/** Logics to sum up the table values both horizontal and vertical */

$('#sum').click(function(){

console.log('inside sum')
var total  = 0;
        var count=0;
        var loopmonitor =2;
        var tempcount = 2;
        var temptotal=0;

        


            $('.summation td').each(function(index){

                ++count;

                if(count%8 ==0){


                   if(total==0){
                        total=0;
                        return;
                    }
                    
                     $(this).text(total)
                    total=0;
                    return;
                }
                


                var x   = parseInt($(this).text(),10);
        
            if(!isNaN(x)){
                total+=x;
            }            

           // console.log(temptotal)

            });
            

            
            for(i=0;i<1;i++){
                count =0;
                temptotal=0;
                countmonitor =1;
                tempcount=loopmonitor;
                $('.summation td').each(function(index){
                             ++count; 
                             if(count!=tempcount){
                                 return;
                             }  
                    var x   = parseInt($(this).text(),10);

                   // console.log('x '+x)

                                if(!isNaN(x)){
                                 temptotal+=x;  
                                }                             
                         tempcount+=8;
                       

                              

         })
                         $('#1').text(temptotal);
                     //    console.log('temptotal '+temptotal)
                           ++loopmonitor;
                           

                          

            }


         })

     /*************************end of table summation logic****************************** */











   /**
    * Below logic is for posting 
    */


   $("#clikme").click(function(){



      /***   
    *  Below this para I am writing scripts to fetch TEXT BOXES data and saving to variable
    */


    var tableOne = [];
    $('#tb1 td').each(function(index){
        var a = $(this).text();
     //   console.log(a)
        tableOne.push(a);
    })
   // console.log(tableOne)





    var tableTwo =[];
    $('#itb1 td').each(function(index){
        var a = $(this).text();
     //   console.log(a)
        tableTwo.push(a);
    })

   // console.log(tableTwo)



    var tableThree = []
    $('#itb2 td').each(function(index){
        var a = $(this).text();
     //   console.log(a)
        tableThree.push(a);
    })

   // console.log({...tableThree});

   

   var tableFour = []
    $('#tb3 td').each(function(index){
        var a = $(this).text();
     //   console.log(a)
        tableFour.push(a);
    })


    var tableFive = []
    $('#tb4 td').each(function(index){
        var a = $(this).text();
     //   console.log(a)
        tableFive.push(a);
    })
      

   var boxColors = [];
    var x = document.querySelectorAll("#stbot1");
    var i;
    for (i = 0; i < x.length; i++) {
      boxColors.push((x[i].style.backgroundColor));
    }
    console.log(boxColors)
              
          




    /**
     * Below I am forming a combined JSON and posting to dest using AJAX
     */

     
       
         console.log('inside sea');
         var textboxObjs = {};
         textboxObjs['1']=$('#tx1').val();
         textboxObjs['2']=$('#tx2').val();
         textboxObjs['3']=$('#tx3').val();
         textboxObjs['4']=$('#tx4').val();
         textboxObjs['5']=$('#tx5').val();
         textboxObjs['6']={...tableOne};
         textboxObjs['7']={...tableTwo};
         textboxObjs['8']={...tableThree};
         textboxObjs['9']={...tableFour};
         textboxObjs['10']={...tableFive};
         textboxObjs['11']={...boxColors};

         //console.log(textboxObjs);


         //console.log(JSON.stringify(textboxObjs)); 
         

          
         
         $.ajax({
            url: "https://api.mlab.com/api/1/databases/productstutorial/collections/deck?apiKey=MXi2J3ryTDKRQF_lqkAoNYJSOI7n6-tw",
            type: 'PUT' ,
            xhrFields: {
               withCredentials: true
           },
           contentType:'application/json',
           data:JSON.stringify(textboxObjs),
           success:function(){
                 alert('Data posted successfully');
           },
           failure:function(xhr,status,err){
              alert("Post failed"+ err);
           }



         })   
      })
      
     
         //running the funcction
         









    /** last closing brackets */    
   })
   

    



    
    
   


 