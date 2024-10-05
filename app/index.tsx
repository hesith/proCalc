import { Text, View } from "react-native";
import { Button, Layout } from '@ui-kitten/components';
import { styles} from '../scripts/styles';
import { useState } from "react";
import * as Haptics from 'expo-haptics';

export default function Index() {

  const[valueBeneath, setValueBeneath] = useState<any>(0); 
  const[displayVal, setDisplayVal] = useState<any>(0); 
  const[isFrac, setIsFrac] = useState<any>(false); 
  const[isOperatorClicked, setIsOperatorClicked] = useState<Boolean>(false); 
  const[lastOperator, setLastOperator] = useState<any>('EQL'); 


  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'black',
        paddingBottom: 30
      }}
    >
      <View style={{flex:6, backgroundColor:'red'}}>
      </View>
      <View style={styles.displayArea}>
        <Text style={styles.displayTxt}>{displayVal}</Text>
      </View>
      <View style={{flex:0, height:'7%'}}>
      </View>
      <View style={{ flex: 0, height:'40%', width:'95%'}}>
        <View style={styles.numberBtnRow}>
          <Button style={styles.numberBtn} size="giant" status="danger" appearance="filled" onPress={()=> btnClick( null,false,'AC')}>
          {evaProps => <Text {...evaProps} style={styles.letterTxt}>AC</Text>}
          </Button>
          <Button style={styles.numberBtn} size="giant" status="info" appearance="filled" onPress={()=> btnClick( null,false,'C')}>
          {evaProps => <Text {...evaProps} style={styles.letterTxt}>C</Text>}
          </Button>
          <Button style={styles.numberBtn} size="giant" status="info" appearance="filled" onPress={()=> btnClick( null,false,'SQRT')}>
            {evaProps => <Text {...evaProps} style={styles.operatorTxt}>√</Text>}
            </Button>
          <Button style={styles.numberBtn} size="giant" status="info" appearance="filled" onPress={()=> btnClick( null,false,'PERC')}>
          {evaProps => <Text {...evaProps} style={styles.operatorTxt}>%</Text>}
            </Button>
        </View>
        <View style={styles.numberBtnRow}>
          <Button style={styles.numberBtn} size="giant" status="basic" appearance="filled" onPress={()=> btnClick(7,false,null)}>
          {evaProps => <Text {...evaProps} style={styles.numberTxt}>7</Text>}
          </Button>
          <Button style={styles.numberBtn} size="giant" status="basic" appearance="filled" onPress={()=> btnClick(8,false,null)}>
          {evaProps => <Text {...evaProps} style={styles.numberTxt}>8</Text>}
          </Button>
          <Button style={styles.numberBtn} size="giant" status="basic" appearance="filled" onPress={()=> btnClick(9,false,null)}>
          {evaProps => <Text {...evaProps} style={styles.numberTxt}>9</Text>}
          </Button>
          <Button style={styles.numberBtn} size="giant" status="info" appearance="filled" onPress={()=> btnClick( null,false,'DIV')}>     
            {evaProps => <Text {...evaProps} style={styles.operatorTxt}>÷</Text>}
            </Button>
        </View>
        <View style={styles.numberBtnRow}>
          <Button style={styles.numberBtn} size="giant" status="basic" appearance="filled" onPress={()=> btnClick(4,false,null)}>
          {evaProps => <Text {...evaProps} style={styles.numberTxt}>4</Text>}
          </Button>
          <Button style={styles.numberBtn} size="giant" status="basic" appearance="filled" onPress={()=> btnClick(5,false,null)}>
          {evaProps => <Text {...evaProps} style={styles.numberTxt}>5</Text>}
          </Button>
          <Button style={styles.numberBtn} size="giant" status="basic" appearance="filled" onPress={()=> btnClick(6,false,null)}>
          {evaProps => <Text {...evaProps} style={styles.numberTxt}>6</Text>}
          </Button>
          <Button style={styles.numberBtn} size="giant" status="info" appearance="filled" onPress={()=> btnClick( null,false,'MULTI')}>
          {evaProps => <Text {...evaProps} style={styles.operatorTxt}>x</Text>}
            </Button>
        </View>
        <View style={styles.numberBtnRow}>
          <Button style={styles.numberBtn} size="giant" status="basic" appearance="filled" onPress={()=> btnClick(1,false,null)}>
          {evaProps => <Text {...evaProps} style={styles.numberTxt}>1</Text>}
          </Button>
          <Button style={styles.numberBtn} size="giant" status="basic" appearance="filled" onPress={()=> btnClick(2,false,null)}>
          {evaProps => <Text {...evaProps} style={styles.numberTxt}>2</Text>}
          </Button>
          <Button style={styles.numberBtn} size="giant" status="basic" appearance="filled" onPress={()=> btnClick(3,false,null)}>
          {evaProps => <Text {...evaProps} style={styles.numberTxt}>3</Text>}
          </Button>
          <Button style={styles.numberBtn} size="giant" status="info" appearance="filled" onPress={()=> btnClick( null,false,'SUBS')}>
          {evaProps => <Text {...evaProps} style={{color:'white', fontSize:24, fontFamily:'RetroGastrollRegular-ywvn3', fontWeight:900}}>-</Text>}
          </Button>
        </View>
        <View style={styles.numberBtnRow}>
          <Button style={styles.numberBtn} size="giant" status="basic" appearance="filled" onPress={()=> btnClick(0,false,null)}>
          {evaProps => <Text {...evaProps} style={styles.numberTxt}>0</Text>}
          </Button>
          <Button style={styles.numberBtn} size="giant" status="basic" appearance="filled" onPress={()=> btnClick( null,true,null)}>
          {evaProps => <Text {...evaProps} style={styles.numberTxt}>.</Text>}
          </Button>
          <Button style={styles.numberBtn} size="giant" status="info" appearance="filled" onPress={()=> btnClick( null,false,'EQL')}>
          {evaProps => <Text {...evaProps} style={styles.operatorTxt}>=</Text>}
            </Button>
          <Button style={styles.numberBtn} size="giant" status="info" appearance="filled" onPress={()=> btnClick( null,false,'ADD')}>
          {evaProps => <Text {...evaProps} style={styles.operatorTxt}>+</Text>}
          </Button>

        </View>
      </View>
      <View style={{ flex: 0, height: '20%'}}>
      </View>
    </View>
  );

  function btnClick(number:  Number|null, isDot: Boolean, operator: String|null) 
  {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid);

    var value;

    if(!(displayVal.toString().length >= 12))
    {

      if( number!=null )
      {  
        value = number;
        
        if(displayVal==0){
          setDisplayVal(value)
          return;
        }else{
          if(isOperatorClicked==true)
          {
            setDisplayVal(value);
            setIsOperatorClicked(false);
            return;
          }
          else  
          {
            setDisplayVal(displayVal.toString().concat(value.toString()));
            return;
          }
        }
      }
      else if(isDot==true)
      {
        if(isFrac==false){
          value = '.'
          setDisplayVal(displayVal.toString().concat(value.toString()))
          setIsFrac(true);
        } 
      }
      else if(operator!=null)
      {
        switch(operator){
          case 'ADD':
          case 'SUBS':
          case 'MULTI':
          case 'DIV':
            if(lastOperator=='EQL'){
              setIsOperatorClicked(true);
              setIsFrac(false);
              setLastOperator(operator);
              setValueBeneath(displayVal.toString());
            }else
            {
              setIsOperatorClicked(true);
              setIsFrac(false);
              calculate(operator);
              setLastOperator(operator);
            }
            
            break;
          case 'SQRT':
            calculate(operator);
            break;
          case 'PERC':
            calculate(operator);
            break;
          case 'EQL':
            calculate(lastOperator);
            setLastOperator(operator);
            break;
          case 'AC':
            setIsFrac(false);
            setDisplayVal(0)
            setIsOperatorClicked(false);
            setValueBeneath(0);
            setLastOperator('EQL');
            break;
          case 'C':
            setIsFrac(false);
            setDisplayVal(0)
            setIsOperatorClicked(false);
            break;

        }
      }

    }
    else
    {
      if( number!=null )
        {  
          value = number;
          
          if(displayVal==0){
            setDisplayVal(value)
            return;
          }else{
            if(isOperatorClicked==true)
            {
              setDisplayVal(value);
              setIsOperatorClicked(false);
              return;
            }
            else  
            {
              setDisplayVal(displayVal.toString().concat(value.toString()));
              return;
            }
          }
        }
      if(operator!=null)
        {
          switch(operator){
            case 'ADD':
            case 'SUBS':
            case 'MULTI':
            case 'DIV':
              if(lastOperator=='EQL'){
                setIsOperatorClicked(true);
                setIsFrac(false);
                setLastOperator(operator);
                setValueBeneath(displayVal.toString());
              }else
              {
                setIsOperatorClicked(true);
                setIsFrac(false);
                calculate(operator);
                setLastOperator(operator);
              }
              
              break;
            case 'SQRT':
              calculate(operator);
              break;
            case 'PERC':
              calculate(operator);
              break;
            case 'EQL':
              calculate(lastOperator);
              setLastOperator(operator);
              break;
            case 'AC':
            case 'C':
              setIsFrac(false);
              setDisplayVal(0);
              setIsOperatorClicked(false);
              break;
            }
        }
    }
  }

  function calculate(lastOperator: any)
  {
    switch (lastOperator){
      case 'ADD':
        var x = (parseFloat(valueBeneath))
        var y = (parseFloat(displayVal))
        
        var z = parseFloat((x+y).toString().substring(0,12));

        setDisplayVal(z);
        setValueBeneath(z);
        setIsOperatorClicked(true);
        break;
      case 'SUBS':
        var x = (parseFloat(valueBeneath))
        var y = (parseFloat(displayVal))
        
        var z = parseFloat((x-y).toString().substring(0,12));

        setDisplayVal(z);
        setValueBeneath(z);
        setIsOperatorClicked(true);
        break;
      case 'MULTI':
        var x = (parseFloat(valueBeneath))
        var y = (parseFloat(displayVal))
        
        var z = parseFloat((x*y).toString().substring(0,12));

        setDisplayVal(z);
        setValueBeneath(z);
        setIsOperatorClicked(true);
        break;
      case 'DIV':
        var x = (parseFloat(valueBeneath));
        var y = (parseFloat(displayVal));
        
        var z = parseFloat((x/y).toString().substring(0,12));

        setDisplayVal(z);
        setValueBeneath(z);
        setIsOperatorClicked(true);
        break;
      case 'SQRT':   
        var y = (parseFloat(displayVal));

        var z = Math.sqrt(y);

        setIsOperatorClicked(true);
        setIsFrac(false);
        setDisplayVal(z.toString().substring(0,12));
        break;
      case 'PERC':   
        var y = parseFloat(displayVal);

        var z = y/100;

        setIsOperatorClicked(true);
        setIsFrac(false);
        setDisplayVal(z.toString().substring(0,12));
        break;
    }
  }
  }


