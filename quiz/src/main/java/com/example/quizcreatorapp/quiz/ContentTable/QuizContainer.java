package com.example.quizcreatorapp.quiz.TableEntities;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Data
@Entity
@NoArgsConstructor
public class QuizContainer {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String title;
    private int points;
    private int timeDuration;
    @Temporal(TemporalType.DATE)
    private Date date;

    @OneToMany(cascade = {CascadeType.ALL})
    private Set<Questionss> questions;

    public Quiz(int id, String title, int points, int timeDuration, Date date) {
        this.id = id;
        this.title = title;
        this.points = points;
        this.timeDuration = timeDuration;
        this.date = date;
    }
}