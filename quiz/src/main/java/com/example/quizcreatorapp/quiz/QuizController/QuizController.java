package com.example.quizcreatorapp.quiz.QuizController;

import com.example.demo.Repos.Rquiz;
import com.example.demo.TableEntities.Quiz;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
public class QuizController {


        @Autowired
        Rquiz quizRepository;
        @GetMapping(value = "/all")
        public List<Quiz> total_data(){
            return (List<Quiz>) quizRepository.findAll();
        }

        @PostMapping(value = "/load")
        public List<Quiz> persist(@RequestBody Quiz quiz){
            quizRepository.save(quiz);
            return (List<Quiz>) quizRepository.findAll();
        }

}
