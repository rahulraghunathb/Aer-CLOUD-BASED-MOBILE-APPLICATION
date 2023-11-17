// BlogScreen.js
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Header from '../components/Header'
import Footer from '../components/Footer'

const BlogScreen = () => {
  const blogPosts = [
    { title: 'Blog Post 1', content: 'Content of Blog Post 1' },
    { title: 'Blog Post 2', content: 'Content of Blog Post 2' },
    { title: 'Blog Post 3', content: 'Content of Blog Post 3' },
    { title: 'Blog Post 4', content: 'Content of Blog Post 4' },
    { title: 'Blog Post 5', content: 'Content of Blog Post 5' }
  ]

  const renderBlogCards = () => {
    return blogPosts.map((post, index) => (
      <View key={index} style={styles.blogCard}>
        <Text style={styles.blogTitle}>{post.title}</Text>
        <Text style={styles.blogContent}>{post.content}</Text>
      </View>
    ))
  }

  return (
    <View style={styles.container}>
      <Header title="Blog" />

      <View style={styles.blogContainer}>{renderBlogCards()}</View>

      <Footer activeOption="book-outline" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  blogContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  blogCard: {
    width: 300,
    backgroundColor: '#DEDCED',
    margin: 15,
    padding: 19,
    borderRadius: 10,
    elevation: 15
    // width: 100%
  },
  blogTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  blogContent: {
    fontSize: 16
  }
})

export default BlogScreen
