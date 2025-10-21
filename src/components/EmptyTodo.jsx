import emptyImg from '../assets/Detective-check-footprint1.png'
import '../css/EmptyTodo.css'
export function EmptyTodo({darkMode}){
    return (
        <div className="empty-container">
            <img className='empty-img' src={emptyImg} alt="Detective-check-footprint" />
            <p className={darkMode ? 'empty-dark' : 'empty'}>Empty...</p>
        </div>
    )
}