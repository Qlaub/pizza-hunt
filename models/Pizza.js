const { Schema, model, Types } = require('mongoose');

const PizzaSchema = new Schema(
  {
    pizzaName: {
      type: String
    },
    createdBy: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    size: {
      type: String,
      default: 'Large'
    },
    toppings: [],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true
    },
    id: false
  }
);

PizzaSchema.virtual('commentCount').get(function() {
  return this.comments.length;
})

// create the actual model passing in our schema
const Pizza = model('Pizza', PizzaSchema);

// export the model
module.exports = Pizza;