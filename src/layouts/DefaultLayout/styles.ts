import { styled } from "styled-components";

export const DefaultLayoutSection = styled.section`
	display: grid;
  grid-template-columns: 300px 1fr;
	grid-template-areas:
		"sidenav nav"
		"sidenav content"
		"sidenav content"
		"sidenav footer"
		;
`;

export const DefaultLayoutHeader = styled.div`
	grid-area: nav;
`;

export const DefaultLayoutSidebar = styled.div`
	grid-area: sidenav;
`;

export const DefaultLayoutOutlet = styled.div`
	grid-area: content;
	background: ${props => props.theme["gray-400"]};
`;

export const DefaultLayoutFooter = styled.div`
	grid-area: footer;
`;