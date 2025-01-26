import chefRobotLogo from "/images/chef-icon.png"

export default function Header() {
    return (
        <header className="header">
            <img src={chefRobotLogo} alt="Chef Robot Logo"/>
            <h1>Appetizing Inpsirations</h1>
        </header>
    )
}