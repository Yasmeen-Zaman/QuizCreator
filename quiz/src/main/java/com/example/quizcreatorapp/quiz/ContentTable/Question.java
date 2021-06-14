package com.example.quizcreatorapp.quiz.TableEntities;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Set;

@Data
@Entity
@NoArgsConstructor
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @Column(columnDefinition = "TEXT")
    private String question;
    private int points;
    private String type;

    @OneToMany(cascade = {CascadeType.ALL})
    private Set<Choices> choices;

    public Questionss(int id, String question, int points, String type) {
        this.id = id;
        this.question = question;
        this.points = points;
        this.type = type;
    }
}