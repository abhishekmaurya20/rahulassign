import React from 'react';
import './App.css';
// import { Switch, Textfield } from 'react-mdl';
import {Switch,TextField ,Grid , Select,MenuItem, FormGroup, InputAdornment, Input } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
// import { Grid, Cell} from 'react-mdl';

 const Forms = () => {

    const [eventType, setEventType] = React.useState('');
    const handleEventChange = (event) => {
        setEventType(event.target.value);
    };

    const [categoryType, setCategoryType] = React.useState('');
    const handleCategoryChange = (event) => {
        setCategoryType(event.target.value);
    };

    const [TimezoneType, setTimezoneType] = React.useState('');
    const handleTimezoneChange = (event) => {
        setTimezoneType(event.target.value);
    };

    const [summary, setSummary] = React.useState('');
    const handleSummary = (event) => {
        setSummary(event.target.value);
    }

    const [sdate, setSdate ] = React.useState('');
    const handleChangeSdate = (event) => {
        setSdate(event.target.value);
    }

    const [edate, setEdate ] = React.useState('');
    const handleChangeEdate = (event) => {
        setEdate(event.target.value);
    }

    const [stime, setStime ] = React.useState('');
    const handleChangeStime = (event) => {
        setStime(event.target.value);
    }

    const [etime, setEtime ] = React.useState('');
    const handleChangeEtime = (event) => {
        setEtime(event.target.value);
    }

    const [textValue, setTextValue ] = React.useState('');
    const handleTextValue = (event) => {
        setTextValue(event.target.value);
    }

    const [onlineLink, setOnlineLink ] = React.useState('');
    const handleOlLink = (event) => {
        setOnlineLink(event.target.value);
    }

    const [typeValue, setTypeValue ] = React.useState('');
    const handleType = (event) => {
        setTypeValue(event.target.value);
    }

    const [titleValue, setTitleValue ] = React.useState('');
    const handleTitle = (event) => {
        setTitleValue(event.target.value);
    }

    return (
        <div>
            {/* <h6 style={{fontSize:"18px", fontWeight:"bold", color:"blue"}}>Create Event</h6>
            <button  className="create-button" type="submit" >Create</button>
            <button  className="cancel-button">Cancel</button>
                
             <hr /> */}
              <br/>
              <br/>
            <div className="container-form mt-5">
                <form  className="form" style={{width:"50%", margin:"auto"}}>

                <FormGroup>
                <label >Add Event in *</label>
                <Select
                    style={{width:"100%"}}
                    labelId="select-label"
                    placeholder="Select..."
                    id="event-id"
                    value={eventType}
                    onChange={handleEventChange}>
                
                <MenuItem value={"events type 1"} >Event 1</MenuItem>
                <MenuItem value={"events type 2"} >Event 2</MenuItem>
                <MenuItem value={"events type 3"} >Event 3</MenuItem>

                </Select>
                </FormGroup>

                <button style={{padding:"18px",height:'96px',width:"96px",backgroundColor:"navy",textAlign:"center",margin:"16px 0px"}}>
                    <h6 style={{backgroundColor:"gray", color:"white", margin:"auto",borderRadius:"5px",fontSize:"16px"}}>
                    Upload image
                    </h6>
                </button>

                <FormGroup>
                    <label >Title *</label>
                    <Input 
                    placeholder=""
                    onChange={handleTitle}
                    value={titleValue}
                    style={{width:"100%"}}
                    />
                    <label style={{textAlign:"right",color:"gray",fontSize:"12px"}}>(0/300)</label>
                </FormGroup>

                <FormGroup>
                    <label >Categories *</label>
                    <Select
                        style={{width:"100%"}}
                        labelId="category-select"              
                        id="category-id"
                        value={categoryType}
                        onChange={handleCategoryChange}>
                    
                    <MenuItem value={"category type 1"} >category 1</MenuItem>
                    <MenuItem value={"category type 2"} >category 2</MenuItem>
                    <MenuItem value={"category type 3"} >category 3</MenuItem>

                    </Select>
                </FormGroup>

                <FormGroup style={{marginTop:"12px"}}>
                    <label >Short Summary *</label>
                    <Input 
                        onChange={handleSummary}
                        value={summary}
                        placeholder=""
                        style={{width:"100%"}}
                    />
                    <label style={{marginTop:"0px",textAlign:"right",color:"gray",fontSize:"12px"}}>(0/300)</label>
                </FormGroup>

                <FormGroup style={{marginTop:"0px"}}>
                    <label style={{fontWeight:"bold"}}>Type:  Public *</label>
                    <Input 
                    onChange={handleType}
                    value={typeValue}
                    placeholder="Registration site"
                    style={{width: '100%',marginTop:"0px"}}
                    />
                    <label style={{textAlign:"right",color:"gray",fontSize:"12px"}}>(0/300)</label>
                </FormGroup>    

                
                <Grid container item xs={12} spacing={3} style={{margin:"0px",marginLeft:"-15px"}}>
                    {/* <Cell col={3}><label>Is this a virtual event ?</label></Cell>
                    <Cell col={1}><span > Yes </span></Cell>
                    <Cell col={1}><Switch defaultChecked /></Cell> */}
                     <Grid col={3}><label>Is this a virtual event ?</label></Grid>
                    <Grid col={1}><span > Yes </span></Grid>
                    <Grid col={1}><Switch defaultChecked /></Grid>
                </Grid>

                <Input 
                onChange={handleOlLink}
                value={onlineLink}
                placeholder="online link"
                style={{width: '100%',marginTop:"-35px"}}
                /> 
                

                <FormGroup style={{margin:"16px 0px"}}>
                    <label>Select Timezone *</label>
                    <FormGroup style={{display:"block"}}>
                    <Select
                    style={{width:"70%"}}
                    labelId="timezone-select"
                    placeholder="Select Time..."
                    id="timezone-id"
                    value={TimezoneType}
                    onChange={handleTimezoneChange}>
                
                    <MenuItem value={"city-1"} >Pune</MenuItem>
                    <MenuItem value={"city-2"} >Mumbai</MenuItem>
                    <MenuItem value={"city-3"} >Bangalore</MenuItem>
                    <MenuItem value={"city-4"} >Delhi</MenuItem>

                    </Select>
                    <span style={{fontWeight:"bold",marginLeft:"8px"}}>GMT +5:30 ?</span>
                    </FormGroup>
                </FormGroup>

                <Grid container item xs={12} spacing={3} style={{width:"70%",margin:"0px", marginLeft:"-15px"}}>
                <Grid item xs={6}>
                    {/* <Cell col={6}> */}
                        <FormGroup style={{marginTop:"12px", }}>
                            <label >Start Date *</label>
                            <Input 
                            id="start-date-id"
                            value={sdate}
                            onChange={handleChangeSdate}
                            />
                        </FormGroup>
                    {/* </Cell> */}
                    </Grid>
                    {/* <Cell col={6}> */}
                    <Grid item xs={6}>
                        <FormGroup style={{marginTop:"12px"}}>
                            <label >Start Time *</label>
                            <Input
                            id="start-time-id"
                            value={stime}
                            onChange={handleChangeStime}
                            endAdornment={
                                <InputAdornment position="end">
                                <FontAwesomeIcon icon={faClock}  />
                                </InputAdornment>
                            }
                            />
                        </FormGroup>
                        </Grid>
                    {/* </Cell> */}
                </Grid>

                <Grid container item xs={12} spacing={3}  style={{width:"70%",margin:"0px", marginLeft:"-15px"}} >
                <Grid item xs={6}>
                        <FormGroup style={{marginTop:"12px"}}>
                            <label >End Date *</label>
                            <Input 
                            id="end-date-id"
                            value={edate}
                            onChange={handleChangeEdate}
                            />
                            
                        </FormGroup>
                        </Grid>
                    {/* </Cell> */}
                    {/* <Cell col={6}> */}
                    <Grid item xs={6}>
                        <FormGroup style={{marginTop:"12px"}}>
                            <label >End Time *</label>
                            <Input
                            id="end-time-id"
                            value={etime}
                            onChange={handleChangeEtime}
                            endAdornment={
                                <InputAdornment position="end">
                                <FontAwesomeIcon icon={faClock}  />
                                </InputAdornment>
                            }
                            />
                        </FormGroup>
                        </Grid>
                    {/* </Cell> */}
                </Grid>
                
                <textarea style={{width:"100%",height:"200px"}}
                    placeholder="Description (max limit 8000 characters)"
                    maxLength= "8000"
                    value={textValue}
                    onChange={handleTextValue}
                />
                

                <FormGroup style={{margin:"12px 0px"}}>
                <label>Attachments ?</label> 
                <button className="upload-file-btn">
                    <FontAwesomeIcon icon={faImage} style={{width:"40",height:"40", color:"gray"}} />
                    <p style={{fontSize:"16px",fontWeight:"bold"}}>Click here to upload file(s)</p>
                </button>
                </FormGroup>

                <p style={{marginTop:"48px",textAlign:"center",color:"gray"}}>Use options on the top right section of the screen to save your changes</p>
                


                </form>
            </div>
            
        </div>
    )
}

export default Forms;
