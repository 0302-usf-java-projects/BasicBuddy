package com.squad.model;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity 
class Post {
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getPictureURL() {
		return pictureURL;
	}

	public Post(int id, String description, String pictureURL, Timestamp submitted, int likeCount, User user) {
		super();
		this.id = id;
		this.description = description;
		this.pictureURL = pictureURL;
		this.submitted = submitted;
		this.likeCount = likeCount;
		this.user = user;
	}

	public void setPictureURL(String pictureURL) {
		this.pictureURL = pictureURL;
	}

	public Timestamp getSubmitted() {
		return submitted;
	}

	public void setSubmitted(Timestamp submitted) {
		this.submitted = submitted;
	}

	public int getLikeCount() {
		return likeCount;
	}

	public void setLikeCount(int likeCount) {
		this.likeCount = likeCount;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	@Column
	private String description;
	@Column
	private String pictureURL;
	@Column
	private Timestamp submitted;
	@Column
	private int likeCount;
	
	 @ManyToOne
	 @JoinColumn(name="FK_UserId")
	private User user;
	
}
