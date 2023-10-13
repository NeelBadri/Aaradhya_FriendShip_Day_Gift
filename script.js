let highestZ= 1 ;

class paper {

holdingpaper= false

PreMouseX= 0;
PreMouseY= 0;

mouseX= 0;
mouseY= 0;

VelocityX= 0;
VelocityY= 0;

CurrentPaperX= 0;
CurrentPaperY= 0;

    init(paper) {
  paper.addeventlistener('mousedown', (e) => )

        this.holdingpaper= true ;

        paper.style.zindex = highestZ

        highestZ+= 1 ;

        if ( e.button === 0) {
            this.preMouseX = this.mouseX ;
            this.PreMouseY = this.mouseY ;
            this.VelocityX = this.mouseX - this.PreMouseX ;
            this.VelocityY = this.mouseY - this.PreMouseY ;

            if (this.holdingpaper) {

                this.CurrentPaperX += this.VelocityX ;
                this.CurrentPaperY += thid.VelocityY ;
                this.PreMouseX = this.mouseX
                this.PreMouseX = this.mouseY

                paper.style.transform = `translateX(${this.CurrentPaperX})px translateY(${this.CurrentPaperY})px` ;
            }
        }


document.addeventlistener('mousemove', (e) => ) {
    

    this.mouseX = e.clientX;
    this.mouseY = e.clientY;
}


window.addEventListener('mouseup', (e) => ) {
    
    this.holdingpaper = false ;
}


    }

}

const papers=Array.fromdocument.querySelectorAll('.paper')

papers.forEach(papers => {
const p = new paper ();
p.init(paper);
})