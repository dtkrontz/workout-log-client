import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import WorkoutCreate from './WorkoutCreate';
import WorkoutTable from './WorkoutTable';
import WorkoutEdit from './WorkoutEdit';

const WorkoutIndex = (props) => {

    const [workouts, setWorkouts] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [workoutToupdate, setWorkoutToUpdate] = useState({});

    let bearerToken = 'Bearer ' + props.token;

    const fetchWorkouts = () => {
        fetch('http://localhost:4000/log', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': bearerToken
            })
        })
        .then((res) => res.json())
        .then((logData) => {
            setWorkouts(logData);
            console.log(logData);
        })
    }

    useEffect(() => {
        fetchWorkouts();
    }, [])

    const editUpdateWorkout = (workout) => {
        setWorkoutToUpdate(workout);
        console.log(workout);
    }

    const updateOn = () => {
        setUpdateActive(true);
    }

    const updateOff = () => {
        setUpdateActive(false);
    }

    return (
        <Container>
            <Row>
                <Col md='3'>
                    <WorkoutCreate fetchWorkouts={fetchWorkouts} token={bearerToken} />
                </Col>
                <Col md='9'>
                    <WorkoutTable workouts={workouts} editUpdateWorkout={editUpdateWorkout} updateOn={updateOn} fetchWorkouts={fetchWorkouts} token={bearerToken} />
                </Col>
                {updateActive ? <WorkoutEdit workoutToUpdate={workoutToupdate} updateOff={updateOff} token={bearerToken} fetchWorkouts={fetchWorkouts} /> : <></>}
            </Row>
        </Container>
    )
}

export default WorkoutIndex;