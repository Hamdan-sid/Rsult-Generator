function checkout(){
    let totalNoPhy = Number(document.getElementById("totalphy").value);
    let obtainNoPhy = Number(document.getElementById("obtainphy").value);
    document.getElementById("totalofphysic").innerText = totalNoPhy;
    document.getElementById("obtainofphysic").innerText = obtainNoPhy;
    let percentageOfPhysic= (obtainNoPhy / totalNoPhy)*100;
    document.getElementById("showPercentagePhy").innerText= percentageOfPhysic + "%";
    if(percentageOfPhysic >= 80){                                         
        document.getElementById("showGradePhy").innerText = "A+"           
    }else if(percentageOfPhysic >= 70){                                  
        document.getElementById("showGradePhy").innerText = "A"          
    }else if(percentageOfPhysic >= 60){                                   
        document.getElementById("showGradePhy").innerText = "B"             
    }else if(percentageOfPhysic >= 50){                                   
        document.getElementById("showGradePhy").innerText = "C"       
    }else{                                                                  
        document.getElementById("showGradePhy").innerText = "Fail"          
    }

    let totalNoChem = Number(document.getElementById("totalchem").value);
    let obtainNoChem = Number(document.getElementById("obtainchem").value);
    document.getElementById("totalofchemistry").innerText = totalNoChem;
    document.getElementById("obtainofchemistry").innerText = obtainNoChem;
    let percentageOfChemistry= (obtainNoChem / totalNoChem)*100;
    document.getElementById("showPercentageChem").innerText= percentageOfChemistry + "%";
    if(percentageOfChemistry >= 80){                                         
        document.getElementById("showGradeChem").innerText = "A+"           
    }else if(percentageOfChemistry >= 70){                                  
        document.getElementById("showGradeChem").innerText = "A"          
    }else if(percentageOfChemistry >= 60){                                   
        document.getElementById("showGradeChem").innerText = "B"             
    }else if(percentageOfChemistry >= 50){                                   
        document.getElementById("showGradeChem").innerText = "C"       
    }else{                                                                  
        document.getElementById("showGradeChem").innerText = "Fail"          
    }


    let totalNoMath = Number(document.getElementById("totalmath").value);
    let obtainNoMath = Number(document.getElementById("obtainmath").value);
    document.getElementById("totalofmath").innerText = totalNoMath;
    document.getElementById("obtainofmath").innerText = obtainNoMath;
    let percentageOfMaths= (obtainNoMath / totalNoMath)*100;
    document.getElementById("showPercentageMath").innerText= percentageOfMaths + "%";

    if(percentageOfMaths >= 80){                                         
        document.getElementById("showGradeMath").innerText = "A+"           
    }else if(percentageOfMaths >= 70){                                  
        document.getElementById("showGradeMath").innerText = "A"          
    }else if(percentageOfMaths >= 60){                                   
        document.getElementById("showGradeMath").innerText = "B"             
    }else if(percentageOfMaths >= 50){                                   
        document.getElementById("showGradeMath").innerText = "C"       
    }else{                                                                  
        document.getElementById("showGradeMath").innerText = "Fail"          
    }
 
    let totalOfAllSub = totalNoPhy + totalNoChem + totalNoMath ;
    let obtainOfAllSub = obtainNoPhy + obtainNoChem + obtainNoMath ;

    document.getElementById("totalofall").innerText = totalOfAllSub;
    document.getElementById("obtainofall").innerText = obtainOfAllSub;

    let percentageOfAllSub = (obtainOfAllSub/totalOfAllSub)*100;
    document.getElementById("showAllPercentage").innerText = percentageOfAllSub + "%" ;
    
    if(percentageOfAllSub >= 80){                                         
        document.getElementById("showGradeAll").innerText = "A+"           
    }else if(percentageOfAllSub >= 70){                                  
        document.getElementById("showGradeAll").innerText = "A"          
    }else if(percentageOfAllSub >= 60){                                   
        document.getElementById("showGradeAll").innerText = "B"             
    }else if(percentageOfAllSub >= 50){                                   
        document.getElementById("showGradeAll").innerText = "C"       
    }else{                                                                  
        document.getElementById("showGradeAll").innerText = "Fail"          
    }
    
    if(percentageOfAllSub >= 60){
          alert("Congratulations!")
     }else{
        alert("Work More Harder.")
     }


}

