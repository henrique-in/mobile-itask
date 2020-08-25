import React, { useState, useEffect } from "react";
import { YellowBox } from "react-native";
import * as S from "./styles";

import api from "../../service/api";

import * as Network from "expo-network";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TaskCard from "../../components/TaskCard";



const Home = ({ actived, navigation }) => {
  const [filter, setFilter] = useState("today");
  const [tasks, setTasks] = useState([]);
  const [load, setLoad] = useState(false);
  const [lateCount, setLateCount] = useState();
  const [macaddress, setMacaddress] = useState();

   async function getMacAddress() {
     await Network.getMacAddressAsync().then((mac) => {
       setMacaddress(mac);
     });
   }

  async function loadTasks() {
    setLoad(true);
    await api
      .get(`/task/filter/${filter}/${macaddress}`)
      .then((response) => {
        setTasks(response.data);
        setLoad(false);
      });
  }

  async function lateVerify() {
    await api.get(`/task/filter/late/${macaddress}`).then((response) => {
      setLateCount(response.data.length);
    });
  }

  function Notification() {
    setFilter("late");
  }

  function AddTask(){
    navigation.navigate('Task');
  }

  function Show(id){
     navigation.navigate('Task',{idTask: id});
  }

  useEffect(() => {
    YellowBox.ignoreWarnings(['Each child']);
    getMacAddress().then(()=>{
      loadTasks();
    });
    lateVerify();
  }, [filter, macaddress]);

  return (
    <S.Container>
      <Header
        showNotification={true}
        showBack={false}
        navigation={navigation}
        pressNotification={Notification}
        late={lateCount}
      />
      <S.Filter>
        <S.FilterBtn onPress={() => setFilter("all")}>
          <S.FilterTextActive actived={filter === "all"}>
            Todos
          </S.FilterTextActive>
        </S.FilterBtn>
        <S.FilterBtn onPress={() => setFilter("today")}>
          <S.FilterTextActive actived={filter === "today"}>
            Hoje
          </S.FilterTextActive>
        </S.FilterBtn>
        <S.FilterBtn onPress={() => setFilter("month")}>
          <S.FilterTextActive actived={filter === "month"}>
            Mês
          </S.FilterTextActive>
        </S.FilterBtn>
        <S.FilterBtn onPress={() => setFilter("week")}>
          <S.FilterTextActive actived={filter === "week"}>
            Semana
          </S.FilterTextActive>
        </S.FilterBtn>
        <S.FilterBtn onPress={() => setFilter("year")}>
          <S.FilterTextActive actived={filter === "year"}>
            Ano
          </S.FilterTextActive>
        </S.FilterBtn>
      </S.Filter>

      <S.ViewTitle>
        <S.Title>TAREFAS {filter == "late" && "ATRASADAS"}</S.Title>
      </S.ViewTitle>

      <S.Scroll>
        {load ? (
          <S.LoadIndicator color="#FF7811" size={50} />
        ) : (
          <S.List
            contentContainerStyle={{alignItems:"center"}}
            data={tasks}
            renderItem={({ item }) => (
              <TaskCard
                done={item.done}
                title={item.title}
                when={item.when}
                type={item.type}
                key={item._id}
                onPress={()=> Show(item._id)}
              />
            )}
            keyExtractor={(item) => item._id}
          />
        )}
      </S.Scroll>
      <Footer icon={"add"} onPress={AddTask}/>
    </S.Container>
  );
};

export default Home;
