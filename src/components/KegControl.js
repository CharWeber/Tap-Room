import React from "react";
import KegList from "./KegList";
import NewKeg from "./NewKeg";
import KegDetail from "./KegDetail";
import KegEdit from "./KegEdit";

class KegControl extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      mainKegList: [],
      formVisible: false,
      selectedKeg: null,
      dataLoaded: false,
      editing: false,
    }
  }

  handleEdit = ()=>{
    this.setState({editing: true})
  }

  handleClick = () => {
    if (this.state.selectedKeg !=null){
      this.setState({selectedKeg: null})
    }
    else{
      this.setState(prevState => ({
        formVisible: !prevState.formVisible,
        selectedKeg: null,
      }))
    }
  }

  handleNewKegForm = (newKeg) => {
    const newMainKegList = this.state.mainKegList.concat(newKeg)
    this.setState({
      mainKegList: newMainKegList,
      formVisible: false
    })
  }

  handleChangeKegSelection = (id) => {
    const Keg = this.state.mainKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: Keg});
  }

  handlePourPint = (id) => {
    const selectKeg = this.state.mainKegList.filter(keg => keg.id === id)[0];
    selectKeg.pintsLeft -= 1;
    const newMainKegList = this.state.mainKegList.map((keg => {return keg.id === id ? selectKeg : keg}));
    this.setState({mainKegList: newMainKegList});
  }

  handleKegRefill = (id) => {
    const selectKeg = this.state.mainKegList.filter(keg => keg.id === id)[0];
    selectKeg.pintsLeft = 124;
    const newMainKegList = this.state.mainKegList.map((keg => {return keg.id === id ? selectKeg : keg}));
    this.setState({mainKegList: newMainKegList});
  }
  handleDeleteKeg = (id) => {
    const newMainKegList = this.state.mainKegList.filter(keg => keg.id !== id);
    this.setState({mainKegList: newMainKegList, selectedKeg: null});
  }

  handleEditKeg = (KegToEdit) => {
    const editedKegs = this.state.mainKegList
      .map((keg => {return keg.id === KegToEdit.id ? KegToEdit : keg}));
    this.setState({
      mainKegList: editedKegs,
      editing: false,
      selectedKeg: null
    });
  }

  render(){
    let currentVisibleState =null;
    let buttonText = null;
    if (!this.state.dataLoaded){
      let newKegs = [{
        name: "Billy's Bubbly",
        description: 'Champagne Everyday for Everyday People. Skip the bottle, Pop a barrel',
        brand: "Champagne Barrels",
        price: 5,
        alcoholContent: '12%',
        pintsLeft: 64,
        id: '1'
      },
      {
        name: 'Cola Cola Cola',
        brand: "Charlie's Cola Cart ©©©",
        description: "Charlie's namesake Cola Cola Cola. Smooth? Rich? Doesn't Matter, one sip will turn your day around",
        price: 3,
        alcoholContent: '0%',
        pintsLeft: 1,
        id: '2'
      },
      {
        name: 'Rusty Good Dog',
        description: "Backwoods Moonshine, made with love by Forest Elvis in the deep woods",
        brand: 'Forest Jailbreak',
        price: 4,
        alcoholContent: '40%',
        pintsLeft: 84,
        id: '3'
      },
      {
        name: "wwwRootBeer",
        brand: "Charlie's Cola Cart ©©©",
        description: "Any soda shoppe worth their suger has a good rootbeer in their main directory",
        price: 3,
        alcoholContent: '0%',
        pintsLeft: 20,
        id: '4'
      },
      {
        name: "Malty Miss Marple Mix",
        brand: "Forest Jailbreak",
        description: "Malty Miss Marple famous Malt beer. Sweet and Easy to drink",
        price: 3,
        alcoholContent: '2.5%',
        pintsLeft: 104,
        id: '5'
      },
      {
        name: "Dangerous Beer",
        brand: "ALL GAS FULL OUT",
        description: "nothing like a beer with a dangerous name to compensate for your mediocrity.",
        price: 3,
        alcoholContent: '8%',
        pintsLeft: 18,
        id: '6'
      }
    ]
    this.setState({
      mainKegList: newKegs,
      dataLoaded: true
    })
    }
    if (this.state.editing){
      currentVisibleState = <KegEdit
      keg={this.state.selectedKeg}
      onKegEdit={this.handleEditKeg}
      />
    }else if (this.state.selectedKeg != null){
      currentVisibleState = <KegDetail 
      keg={this.state.selectedKeg}
      onPourPint = {this.handlePourPint}
      onKegRefill={this.handleKegRefill}
      onKegDelete={this.handleDeleteKeg}
      onKegEdit={this.handleEdit}
      />
      buttonText = "Keg List"
    } else if (this.state.formVisible){
      currentVisibleState = <NewKeg onNewKeg={this.handleNewKegForm} buttonText="Submit"/>
      buttonText = 'Keg List';
    }
    else{
      currentVisibleState =  
      <div class="content-grid">
        <KegList
        mainKegList={this.state.mainKegList}
        onKegSelection={this.handleChangeKegSelection}
        />
      </div>
      buttonText = 'Add Keg'
    }

    return(
      <React.Fragment>
        <div style={{textAlign: 'center'}}>
          <h3 style={{color: 'white'}}>Menu</h3>
          <button onClick={this.handleClick}>{buttonText}</button>
        </div>
        {currentVisibleState}
      </React.Fragment>
    )
  }
}
export default KegControl;