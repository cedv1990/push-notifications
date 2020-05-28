//Acá se debería hacer alguna implementación de persistencia de las suscripciones. Por ejemplo: Redis, SQL, etc.

const dummyDb = { subscription: null };

const saveSubscription = async subscription => {
    dummyDb.subscription = subscription;
};

const getSubscription = async () => {
    return dummyDb.subscription;
};

module.exports = {
    saveSubscription,
    getSubscription
};