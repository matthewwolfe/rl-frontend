import { ObjectCollection } from 'mobx/core';
import { Trade } from 'mobx/models';


class Trades extends ObjectCollection {

    Model = Trade;
}

export default Trades;
