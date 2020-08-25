import React,{useState, useEffect} from 'react';
import { Alert, YellowBox } from "react-native";

import api from "../../service/api";

import * as Network from 'expo-network';

import DateTimeInput from '../../components/DateTimeInput';


import Header from "../../components/Header";
import Footer from "../../components/Footer";
import * as S from './styles';
import typeIcons from '../../utils/typeIcons';

const Task = ({ navigation, idTask}) => {
  const [id, setId] = useState();
  const [done, setDone] = useState(false);
  const [type, setType] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [hour, setHour] = useState();
  const [macaddress, setMacaddress] = useState();
  const [load, setLoad] = useState(true);

  async function SaveTask(){
    if(!title)
    return Alert.alert('Defina o título da tarefa!');

    if (!description) 
    return Alert.alert('Defina a descrição da tarefa!');

    if (!type) 
    return Alert.alert('Escolha um tipo para a tarefa!');

    if (!date) 
    return Alert.alert("Escolha uma data para a tarefa!");

    if (!hour) 
    return Alert.alert("Escolha um horário para a tarefa!");

    if(id){
      await api
        .put(`/task/${id}`, {
          macaddress,
          done,
          type,
          title,
          description,
          when: `${date}T${hour}.000`,
        })
        .then(() => {
          navigation.navigate("Home");
        });


    }else{
      await api
        .post("/task", {
          macaddress,
          type,
          title,
          description,
          when: `${date}T${hour}.000`,
        })
        .then(() => {
          navigation.navigate("Home");
        });

    }
    
  }

  async function LoadTask(){
    await api.get(`/task/${id}`).then(response=>{
      setLoad(true);
      setDone(response.data.done);
      setType(response.data.type);
      setTitle(response.data.title);
      setDescription(response.data.description);
      setDate(response.data.when);
      setHour(response.data.when);
    })
  }

  async function getMacAddress(){
    await Network.getMacAddressAsync().then(mac => {
      setMacaddress(mac);
      setLoad(false)
    });
  }
  
  async function DeleteTask(){
    await api.delete(`/task/${id}`).then(()=>{
      Alert.alert('Tarefa removida com sucesso!')
      navigation.navigate('Home');
    });
  }
  
  function Remove(){
      Alert.alert(
      'Remover Tarefa',
      'Deseja realmente remover esta tarefa?',
      [
        {text: 'Cancelar'},
        {text: 'Confirmar', onPress:() => DeleteTask()}
      ],
      {cancelable: true}
    )
  }

  useEffect(()=>{
    getMacAddress();
    YellowBox.ignoreWarnings(['Possible Unhandled']);
    if (navigation.state.params){
    setId(navigation.state.params.idTask);
    LoadTask().then(()=> setLoad(false))
    }
   
  },[macaddress])
 

  return (
    <S.Container>
      <Header showBack={true} navigation={navigation} />
      {load ? (
        <S.LoadIndicator color="#FF7811" size={50} />
      ) : (
        <S.Form>
          <S.ViewType>
            {typeIcons.map(
              (icon, index) =>
                icon != null && (
                  <S.TypeButton onPress={() => setType(index)}>
                    <S.TypeIcon
                      source={icon}
                      style={type && type != index && { opacity: 0.5 }}
                    />
                  </S.TypeButton>
                )
            )}
          </S.ViewType>
          <S.Label>Título</S.Label>
          <S.Input
            maxLength={30}
            placeholder="Lembre-me de fazer"
            onChangeText={(text) => setTitle(text)}
            value={title}
          />

          <S.Label>Detalhes</S.Label>
          <S.InputArea
            style={{ textAlignVertical: "top" }}
            multiline={true}
            maxLength={200}
            placeholder="Detalhes da atividade"
            onChangeText={(text) => setDescription(text)}
            value={description}
          />

          <DateTimeInput type={"date"} save={setDate} dated={date} />
          <DateTimeInput type={"time"} save={setHour} hour={hour} />

          {id && (
            <S.inLine>
              <S.inputLine>
                <S.Switch
                  onValueChange={() => setDone(!done)}
                  value={done}
                  thumbColor={done ? "#FF7811" : "#707070"}
                />
                <S.SwitchLabel>Concluído</S.SwitchLabel>
              </S.inputLine>
              <S.RemoveButton onPress={Remove}>
                <S.RemoveLabel>EXCLUÍR</S.RemoveLabel>
              </S.RemoveButton>
            </S.inLine>
          )}
        </S.Form>
      )}
      <Footer icon={"save"} onPress={SaveTask} />
    </S.Container>
  );
}

export default Task;