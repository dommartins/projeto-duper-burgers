import './Header.scss'
import Brand from '../../assets/icons/brand.svg'

export default function Header() {
    return (
        <>
            <div className="container text-center db-header-home">
                <a href="/">
                    <img src={Brand} alt="Duper Burgers" />
                </a>
            </div>
        </>
    )
}
