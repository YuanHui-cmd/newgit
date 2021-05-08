//左移
function left() {
    let t=0;
    //遍历所有非空模块
    for (let i = 0; i < 4; i++) {
        let a=new Array();
        for (let j = 1; j < 4; j++) {
            if (text[i][j] != 0) {
                //如果和左边元素相等，合并
                if (text[i][j] == text[i][j - 1]) {
                    //移动
                    moveLeft(i,j,j-1);
                    //合并
                    text[i][j-1]+=text[i][j];
                    text[i][j]=0;
                    a.push(j-1);
                    t++;
                }
                //如果左边的元素为0
                if(text[i][j-1]==0){
                    let k=j-1;
                    while(text[i][k]==0){
                        k--;
                        if(k<0) break;}
                    if(k<0){
                        moveLeft(i,j,0);
                        text[i][0]=text[i][j];
                        text[i][j]=0;
                        t++;}
                    else if(text[i][j] != text[i][k]){
                        moveLeft(i,j,k+1);
                        text[i][k+1]=text[i][j];
                        text[i][j]=0;
                        t++;}
                    else if(text[i][j]==text[i][k]&&a.includes(k)){
                        moveLeft(i,j,k+1);
                        text[i][k+1]=text[i][j];
                        text[i][j]=0;
                        t++}
                    else if(text[i][j]==text[i][k]&&!a.includes(k)){
                        moveLeft(i,j,k);
                        text[i][k]+=text[i][j];
                        text[i][j]=0;
                        a.push(k);
                        t++}
                }
            }
        }
    }
    setTimeout(update,200,text);
    if(t>0) return true;
    else return false;
}
function moveLeft(i,j,k){
    document.getElementById("n"+i+j).style.left=setLeft(k);
}

//右移
function right() {
    let t=0;
    //遍历所有非空模块
    for (let i = 0; i < 4; i++) {
        let a=new Array();
        for (let j = 2; j >=0; j--) {
            if (text[i][j] != 0) {
                //如果和右边元素相等，合并
                if (text[i][j] == text[i][j+1]) {
                    //移动
                    moveRight(i,j,j+1);
                    //合并
                    text[i][j+1]+=text[i][j];
                    text[i][j]=0;
                    a.push(j+1);
                    t++;
                }
                //如果右边的元素为0
                if(text[i][j+1]==0){
                    let k=j+1;
                    while(text[i][k]==0){
                        k++;
                        if(k>3) break;}
                    if(k>3){
                        moveRight(i,j,3);
                        text[i][3]=text[i][j];
                        text[i][j]=0;
                        t++;}
                    else if(text[i][j]!=text[i][k]){
                        moveRight(i,j,k-1);
                        text[i][k-1]=text[i][j];
                        text[i][j]=0;
                        t++;}
                    else if(text[i][j]==text[i][k]&&a.includes(k)){
                        moveRight(i,j,k-1);
                        text[i][k-1]=text[i][j];
                        text[i][j]=0;
                        t++}
                    else if(text[i][j]==text[i][k]&&!a.includes(k)){
                        moveRight(i,j,k);
                        text[i][k]+=text[i][j];
                        text[i][j]=0;
                        a.push(k);
                        t++}
                }
            }
        }
    }
    setTimeout(update,200,text);
    if(t>0) return true;
    else return false;
}
function moveRight(i,j,k){
    document.getElementById("n"+i+j).style.left=setLeft(k);
}
//上移
function up(){
    let t=0;
    for(let j=0;j<4;j++){
        let a=new Array();
        for(let i=1;i<4;i++){
            if(text[i][j]!=0){
                if(text[i][j]==text[i-1][j]){
                    moveup(j,i,i-1);
                    text[i-1][j]+=text[i][j];
                    text[i][j]=0;
                    a.push(i+1);
                    t++;
                }
                if(text[i-1][j]==0){
                    let k=i-1;
                    while(text[k][j]==0){
                        k--;
                        if(k<0) break;}
                    if(k<0){
                        moveup(j,i,0);
                        text[0][j]=text[i][j];
                        text[i][j]=0;
                        t++;}
                    else if(text[i][j] != text[k][j]){
                        moveup(j,i,k+1);
                        text[k+1][j]=text[i][j];
                        text[i][j]=0;
                        t++;}
                    else if(text[i][j]==text[k][j]&&a.includes(k)){
                        moveup(j,i,k+1);
                        text[k+1][j]=text[i][j];
                        text[i][j]=0;
                        t++;}
                    else if(text[i][j]==text[k][j]&&!a.includes(k)){
                        moveup(j,i,k);
                        text[k][j]+=text[i][j];
                        text[i][j]=0;
                        a.push(k);
                        t++;}
                }
            }
        }
    }
    setTimeout(update,200,text);
    if(t>0) return true;else return false;
}
function moveup(j,i,k){
    document.getElementById("n"+i+j).style.top=setTop(k);
}

//下移
function down(){
    let t=0;
    for(let j=0;j<4;j++){
        let a=new Array();
        for(let i=2;i>=0;i--){
            if(text[i][j]!=0){
                if(text[i][j]==text[i+1][j]){
                    moveDown(j,i,i+1);
                    text[i+1][j]+=text[i][j];
                    text[i][j]=0;
                    a.push(i+1);
                    t++;
                }
                if(text[i+1][j]==0){
                    let k=i+1;
                    while(text[k][j]==0){
                        k++;
                        if(k>3) break;}
                    if(k>3){
                        moveDown(j,i,3);
                        text[3][j]=text[i][j];
                        text[i][j]=0;
                        t++;}
                    else if(text[i][j]!=text[k][j]){
                        moveDown(j,i,k-1);
                        text[k-1][j]=text[i][j];
                        text[i][j]=0;
                        t++;}
                    else if(text[i][j]==text[k][j]&&a.includes(k)){
                        moveDown(j,i,k-1);
                        text[k-1][j]=text[i][j];
                        text[i][j]=0;
                        t++;}
                    else if(text[i][j]==text[k][j]&&!a.includes(k)){
                        moveDown(j,i,k);
                        text[k][j]+=text[i][j];
                        text[i][j]=0;
                        a.push(k);
                        t++;}
                }
            }
        }
    }
    setTimeout(update,200,text);
    if(t>0) return true;else return false;
}

function moveDown(j,i,k){
    document.getElementById("n"+i+j).style.top=setTop(k);
}

