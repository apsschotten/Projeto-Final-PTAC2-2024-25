import '../styles/styles.css';

export default function Loading() {
    return (
        <div className='Load'>
            <img src='src\images\Loading.gif' alt='Kirby.' className='LoadImage'></img>
            <img src='src\images\Loading2.gif' alt='Carregando...' className='LoadImageExt'></img>
        </div>
    );
}  