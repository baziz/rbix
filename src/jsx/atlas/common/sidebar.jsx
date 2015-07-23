import {
  Sidebar, SidebarNav, SidebarNavItem,
  SidebarControls, SidebarControlBtn
} from 'global/jsx/sidebar_component';

import { Link } from 'react-router';
import LoremIpsum from 'global/jsx/loremipsum';



class ApplicationSidebar extends React.Component {
  handleClick(){
    ReactBootstrap.Dispatcher.emit('Body:updateCurrentPosition', [52.505, -0.09]);
  }

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12}>
              <div className='sidebar-header'>PAGES</div>
              <div className='sidebar-nav-container'>
                <SidebarNav style={{marginBottom: 0}}>
                  <SidebarNavItem glyph='icon-fontello-map' name={<span>Map Layers <BLabel className='bg-lightblue fg-white'>5</BLabel></span>} href='/' >
                    <SidebarNav>
                      <SidebarNavItem glyph='icon-fontello-art-gallery' name='Natural Color' />
                      <SidebarNavItem glyph='icon-fontello-th-outline' name='Objects' />
                      <SidebarNavItem glyph='icon-fontello-direction-outline' name='Paths' />
                      <SidebarNavItem glyph='icon-fontello-direction-outline' name='People' />
                      <SidebarNavItem glyph='icon-fontello-direction-outline' name='Soil' />
                    </SidebarNav>
                  </SidebarNavItem>
                  <SidebarNavItem glyph='icon-fontello-location-inv' name={<span>Places <BLabel className='bg-darkgreen45 fg-white'>3</BLabel></span>} >
                    <SidebarNav>
                      <SidebarNavItem glyph='icon-fontello-direction-2' name='Fairfield' lat=23 onClick={this.handleClick} />
                      <SidebarNavItem glyph='icon-fontello-direction-2' name='Napa' />
                      <SidebarNavItem glyph='icon-fontello-direction-outline' name='Make New Place' />
                    </SidebarNav>
                  </SidebarNavItem>
                <SidebarNavItem glyph='icon-fontello-edit' name='Draw' />
                </SidebarNav>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}


class DummySidebar extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <div className='sidebar-header'>DUMMY SIDEBAR</div>
            <LoremIpsum query='1p' />
          </Col>
        </Row>
      </Grid>
    );
  }
}

class FeedSidebar extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
                  <Label htmlFor='defaultinput' control>asdf</Label>
                  <Col sm={10}>
                    <Input id='defaultinput' placeholder='default' />
                  </Col>
           </Col >
        </Row>
        <Row>
          <Col xs={12}>
            <div className='sidebar-header'>FEED SIDEBAR</div>
            <LoremIpsum query='1p' />
          </Col>
        </Row>
      </Grid>
    );
  }
}

class ContactSidebar extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <div className='sidebar-header'>CONTACT SIDEBAR</div>
            <LoremIpsum query='1p' />
          </Col>
        </Row>
      </Grid>
    );
  }
}

class DocsSidebar extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <div className='sidebar-header'>DOCS SIDEBAR</div>
            <LoremIpsum query='1p' />
          </Col>
        </Row>
      </Grid>
    );
  }
}


export default class extends React.Component {
  render() {
    return (
      <div id='sidebar' {...this.props}>
        <div id='avatar'>
          <Grid>
            <Row className='fg-white'>
              <Col xs={4} collapseRight>
                <img src='/imgs/avatars/avatar0.png' width='40' height='40' />
              </Col>
              <Col xs={8} collapseLeft id='avatar-col'>
                <div style={{top: 23, fontSize: 16, lineHeight: 1, position: 'relative'}}>Anna Sanchez</div>
                <div>
                  <Progress id='demo-progress' value={30} min={0} max={100} color='#ffffff'/>
                  <Link to='/app/lock'><Icon id='demo-icon' bundle='fontello' glyph='lock-5' /></Link>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
        <SidebarControls>
          <SidebarControlBtn bundle='fontello' glyph='menu' sidebar={0} />
          <SidebarControlBtn bundle='fontello' glyph='chat-1' sidebar={1} />
          <SidebarControlBtn bundle='fontello' glyph='contacts' sidebar={2} />
          <SidebarControlBtn bundle='fontello' glyph='docs' sidebar={3} />
        </SidebarControls>
        <div id='sidebar-container'>
          <Sidebar sidebar={0} active>
            <ApplicationSidebar />
          </Sidebar>
          <Sidebar sidebar={1}>
            <FeedSidebar />
          </Sidebar>
          <Sidebar sidebar={2}>
            <ContactSidebar />
          </Sidebar>
          <Sidebar sidebar={3}>
            <DocsSidebar />
          </Sidebar>
        </div>
      </div>
    );
  }
}
