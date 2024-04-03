function sumsort()
{
    let size = parseInt(prompt("Kindly enter the size of elements in the array: "));
    var arr=[],sorted=[];
    var sum=0,temp;
    for(let i = 0; i < size; i++)
    {
        arr.push(+prompt("Enter element " + (i+1) + ": "));
        sorted[i]=arr[i];
        sum+=arr[i];
    }
    for(let i = 0; i < size; i++)
    {
        for(let j = 0; j < size-i-1; j++)
        {
            if(sorted[j]>sorted[j+1])
            {
                temp=sorted[j];
                sorted[j]=sorted[j+1];
                sorted[j+1]=temp;
            }
        }
    }
    alert('Given array: ' + arr.join(', ') + "\n\nSum of elements: " + sum + "\nSorted array: " +sorted.join(', '));
}

function grades()
{
    let studsize = parseInt(prompt("Enter the number of students in the class: "));
    let subsize = parseInt(prompt("Enter the number of subjects: "));
    let classsum = 0;
    let output = "<h3>Grades:</h3>";

    for (let i = 1; i <= studsize; i++) 
    {
        let studsum = 0;
        output += "<h4>Student " + i + ":</h4><ul>";
        for (let j = 1; j <= subsize; j++)
        {
            let grade = parseFloat(prompt("Enter the grade of Student " + i + " for Subject " + j + ": "));
            output += "<li>Subject " + j + ": " + grade + "</li>";
            studsum += grade;
        }
        let studavg = studsum / subsize;
        classsum += studavg;
        output += "<li><strong>Student Average Grade:</strong> " + studavg.toFixed(2) + "</li></ul>";
    }
    let classavg = classsum / studsize;
    output += "<h3>Class Average Grade:</h3><p>" + classavg.toFixed(2) + "</p>";
    document.getElementById("gradesOutput").innerHTML = output;
}