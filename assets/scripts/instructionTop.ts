
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

    onLoad () {
        
        this.canvas.on('moveNode',(nodeName)=>{
            if(nodeName.localeCompare('instructionTop')==0){
                this.instruction.string = 'Fill the cannon with the required  amount of gunpowder \n to fire the cannonball.'
                var sequence = cc.sequence(cc.fadeOut(0),cc.fadeIn(1.0));
                this.node.runAction(sequence);
                this.node.runAction(cc.moveTo(1.0,cc.v2(0,180)));
            }
        })
    }

    start () {

    }

    // update (dt) {}
}
