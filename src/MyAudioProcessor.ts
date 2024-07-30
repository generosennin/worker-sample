export class MyAudioProcessor extends AudioWorkletProcessor{
    public process(inputs:Float32Array[][], outputs:Float32Array[][], parameter:Record<string, Float32Array>){
        console.log('worklet', inputs[0])
        return true;
    }
}

registerProcessor("MyAudioProcessor", MyAudioProcessor);