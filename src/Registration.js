import React, { useState, useMemo, useEffect } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Icon, InlineIcon } from "@iconify/react";
import { Container, Col, Row, Form } from "react-bootstrap";
import throttle from "lodash/throttle";
import axios from "axios";

import TextField from "@material-ui/core/TextField";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

function Registration() {
  const [value, setValue] = React.useState(null);
  const [inputValue, setInputValue] = React.useState("");
  const [options, setOptions] = React.useState([]);
  const fetch = React.useMemo(
    () =>
      throttle((request, callback) => {
        axios
          .get(
            `https://api.locationiq.com/v1/autocomplete.php?key=pk.613835555440da24c12d9909a5d7c089&q=${request.input}`
          )
          .then((resp) => {
            callback(resp.data);
          });
      }, 200),
    []
  );

  React.useEffect(() => {
    let active = true;
    if (inputValue === "") {
      setOptions(value ? [value] : []);
      return undefined;
    }

    fetch({ input: inputValue }, (results) => {
      console.log(active);

      if (active) {
        let newOptions = [];

        if (value) {
          newOptions = [value];
        }

        if (results) {
          newOptions = [...newOptions, ...results];
        }

        setOptions(newOptions);
      }
    });

    return () => {
      active = false;
    };
  }, [value, inputValue, fetch]);
  // React.useEffect(() => {
  //   if (props.value) {
  //     setValue(props.value);
  //   }
  // }, [props.value]);

  return (
    <>
      <Form>
        <Row id="name">
          <Col>
            <Form.Select id="form-size">
              <option>Prefix</option>
            </Form.Select>
          </Col>

          <Col>
            <Form.Control placeholder="First name" />
          </Col>
          <Col >
            <Form.Control id="form-size"placeholder="Middle name" />
          </Col>
          <Col>
            <Form.Control placeholder="Last name" />
          </Col>

          <Col>
            <Form.Select id="form-size">
              <option>Suffix</option>
            </Form.Select>
          </Col>
        </Row>

        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label id="email">Email Address</Form.Label>
          <Form.Control  id="emailp" type="email" placeholder="" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Row>
          <Col>
            <Form.Select id="formC">
              <option>Country Code</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Control id="formP" placeholder="Primary Phone" />
          </Col>
        </Row>
      </Form>




      <form id="address-form" action="" method="get" autocomplete="off">
        
      
        
      
      
        <label class="full-field">
          <Autocomplete
            id="google-map-demo"
            // style={{ width: 300 }}

            getOptionLabel={(option) =>
              typeof option === "string" ? option : option.display_address
            }
            filterOptions={(x) => x}
            options={options}
            autoComplete
            includeInputInList
            filterSelectedOptions
            value={value}
            onChange={(event, newValue) => {
              setOptions(newValue ? [newValue, ...options] : options);
              setValue(newValue);
            }}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            renderInput={(params) => (
              <TextField {...params} variant="outlined" fullWidth />
              // <Form.Control  {...params} className={styles.newinput} type="text" name="address" placeholder="Address" />
            )}
            renderOption={(option) => {
              if (option.address) {
                return (
                  <Grid container alignItems="center">
                    <Grid item>
                      <LocationOnIcon />
                    </Grid>
                    <Grid item xs>
                      <span style={{ fontWeight: 700 }}>
                        {option?.address?.name}
                      </span>
                      <Typography variant="body2" color="textSecondary">
                        {`${option?.address?.state}, ${option?.address?.country}`}
                      </Typography>
                    </Grid>
                  </Grid>
                );
              }
            }}
          />
        </label>
        

       
      </form>

      <script
        src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initAutocomplete&libraries=places&v=weekly"
        async
      ></script>
    </>
  );
}

export default Registration;
