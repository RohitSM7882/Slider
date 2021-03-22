const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    @property(cc.Node)
    canvas: cc.Node = null;

    @property(cc.Label)
    instruction: cc.Label = null;

    @property(cc.Node)
    fireButton: cc.Node =  null;

    onLoad () {
        
        this.canvas.on('moveNode',(nodeName)=>{
            if(nodeName.localeCompare('instructionTop')==0){
                var instrction = 'Fill the cannon with the required  amount of gunpowder \n to fire the cannonball.'
                this.fadeInInstruction(instrction);
            }
        })

        this.fireButton.on('readyToFire',(readyToFire)=>{

            if(readyToFire){
                this.fadeOutInstruction();
                setTimeout(() => {
                    var instrction = "Now, load the cannonball, and fire!";
                    this.fadeInInstruction(instrction);
                }, 
                1000);

            }
        });
    }

    fadeInInstruction(instrction){

        this.instruction.string = instrction;
        var sequence = cc.sequence(cc.fadeOut(0),cc.fadeIn(0.5));
        this.node.runAction(sequence);
        this.node.runAction(cc.moveTo(0.5,cc.v2(0,180)));

    }

    fadeOutInstruction(){

        var sequence = cc.sequence(cc.fadeOut(0.5),cc.moveTo(0,cc.v2(-180,180)));
        this.node.runAction(sequence);
        this.node.runAction(cc.moveTo(1.0,cc.v2(180,180)));

    }

    start () {

    }

    // update (dt) {}
}