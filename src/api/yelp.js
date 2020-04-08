import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer UI50l32yGdAqFhQHAtVIxhL6-scixiR21Xy5r53JkkoFyvQlnXsVx0gPjb2pfn5snCBI9_dI5szIW3AzFeZB7wcqVwHa0NoIffdJ4HWOA4cgNwbsDciAL_rgzoSLXnYx' 
  }
});
