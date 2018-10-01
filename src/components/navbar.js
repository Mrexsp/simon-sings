import React from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import DonateModal from "./donateModal";

export default class Navigation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collapse: false,
			isWideEnough: false,
			dropdownOpen: false,
			modal: false,
		};
	}

	onClick = () => {
		this.setState({
			collapse: !this.state.collapse,
		});
	}

	toggle = () => {
		this.setState({
			dropdownOpen: !this.state.dropdownOpen
		});
	}

	toggleModal = () => {
		this.setState({
			modal: !this.state.modal
		});
	}

	render() {
		return (
			<Router>
				<div>
					<DonateModal modal={this.state.modal} toggle={this.toggleModal} />
					<Navbar color="deep-orange darken-4" dark expand="md" scrolling>
						<NavbarBrand href="/">
							<strong className="logo">Simon Sings</strong>
						</NavbarBrand>
						{!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
						<Collapse isOpen={this.state.collapse} navbar>
							<NavbarNav right>
								<NavItem>
									<NavLink to="#" onClick={this.props.handleReset}>Reset Game</NavLink>
								</NavItem>
								<NavItem>
									<NavLink to="#" onClick={this.props.handlePlayback}>Replay Notes</NavLink>
								</NavItem>
								<NavItem>
									<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
										<DropdownToggle nav caret>Options</DropdownToggle>
										<DropdownMenu>
											<DropdownItem href="javascript:;" onClick={this.props.handlesolfege}>Toggle Solfege</DropdownItem>
											<DropdownItem href="javascript:;" onClick={this.props.handleButtonFlash}>Toggle Button Flash</DropdownItem>
											<DropdownItem href="javascript:;" onClick={this.props.handleBlackKeys}>Toggle Black Keys</DropdownItem>
											<DropdownItem href="javascript:;" onClick={this.props.handleProMode}>Toggle Pro Mode</DropdownItem>
										</DropdownMenu>
									</Dropdown>
								</NavItem>
								<NavItem>
									<NavLink to="#" onClick={this.toggleModal}>Donate</NavLink>
								</NavItem>
							</NavbarNav>
						</Collapse>
					</Navbar>
				</div>
			</Router>
		);
	}
}
