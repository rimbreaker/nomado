import {call,StrictEffect} from 'redux-saga/effects'

function* crashHandlingDecoratorSaga(
    sagaToBecalled:any,
    ...args:any[]
):Generator<StrictEffect,any,any>{
    try{
        yield call(sagaToBecalled,...args);
    }catch(error){
        console.error(error)
    }
}

export default crashHandlingDecoratorSaga