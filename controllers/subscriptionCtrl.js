const Subscription = require('../models/subscription')

exports.subscriptionContractList = async (req, res, next) => {

    let options = {
        select: 'start_date',
        limit: 10,
        where: [{
            'current_status' : 'processing',
            'SubscriptionType.name' : 'MAJ',
            'start_date' : '{ &gte: 30/12/2018}'
        }]
    }

    const subscriptions = await Subscription.find(options.where[0], options.select).limit(options.limit)
    res.send(subscriptions) 
};

