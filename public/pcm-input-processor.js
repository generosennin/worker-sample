
class PCMInputProcessor extends AudioWorkletProcessor {
    stereo = true
    process(inputs, outputs, parameter){
        console.log(inputs[0])
        // let buffer;
        // if(this.stereo){
        //     buffer = this.float32ArrayStereo(inputs[0][0], inputs[0][1])
        // } else {
        //     buffer = inputs[0][0]
        // }

        // this.port.postMessage({data: buffer})
        return true   
    }
    float32ArrayStereo(inputLeft, inputRight){
        const size = inputLeft.length;
        const arrayBuffer = new ArrayBuffer(inputLeft.length * 4 * 2) // bytes, channels
        const float32Array = new Float32Array(arrayBuffer)
        for(let i = 0; i < size; i++){
            float32Array[i * 2] = inputLeft[i]
            float32Array[i * 2 + 1] = inputRight[i]
        }
        return float32Array;
    }

}

registerProcessor("pcm-input-processor", PCMInputProcessor);