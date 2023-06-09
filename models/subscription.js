const mongoose = require('mongoose');

const subscriptionSchema = mongoose.Schema({
  id: { type: String },
  Company: { type: String },
  Tool: { type: String},
  ToolModel: { type: String },
  ToolCategory: { type: String},
  SubscriptionModel: { type: String },
  SubscriptionType: { type: Object },
  contract_reference: { type: String},
  duration: { type: Number},
  start_date: { type: Date},
  active: { type: Boolean},
  payment_method: { type: String },
  denounced: { type: Boolean},
  canceled: { type: Boolean},
  renewable: { type: Boolean},
  current_status: { type: String },
  ended_on: { type: String },
});


module.exports = mongoose.model('subscription', subscriptionSchema, 'subscriptions');