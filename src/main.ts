import Worker from './worker.ts?worker'
import workletURL from './MyAudioProcessor.ts?url'
const setupAudioWorklet = async() => {
    const userMedia = await navigator.mediaDevices.getUserMedia({audio:true, video: false})    
    const audioContext = new AudioContext()
    audioContext.resume()
    const microphone =await audioContext.createMediaStreamSource(userMedia)
    await audioContext.audioWorklet.addModule(workletURL)
    const audioNode = new AudioWorkletNode(
      audioContext,
      'MyAudioProcessor'
    )
    microphone.connect(audioNode).connect(audioContext.destination)
 
}

const setupWorker = () => {
    const worker = new Worker();
    worker.postMessage({data: 'hello'})
}

const main = async() => {
    setupAudioWorklet()
    setupWorker()
}

document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#button') as HTMLButtonElement
    button.addEventListener('click', async() => {
        main()
    })
})