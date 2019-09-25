import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function CourseItem(props) {
    const { course } = props;
    return (
        <Card className="course-item">
            <CardActionArea>
                <CardMedia
                    className="course-item__media"
                    image={course.hinhAnh}
                    title="Contemplative Reptile"
                />
                {/* <img className="course-item__media" src={course.hinhAnh} alt="abc" /> */}
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {course.tenKhoaHoc}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {course.moTa}
                    </Typography>
                </CardContent>
            </CardActionArea>
            {/* <CardActions>
                <Button size="small" color="primary">
                    Share
        </Button>
                <Button size="small" color="primary">
                    Learn More
        </Button>
            </CardActions> */}
        </Card>
    )
}

